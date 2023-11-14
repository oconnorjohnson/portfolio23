import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

//------------------------ Create Server Db Client -----------------------------//
function createServerDbClient(accessToken?: string) {
  const headers = accessToken
    ? { Authorization: `Bearer ${accessToken}` }
    : undefined;
  return createClient(supabaseUrl as string, supabaseKey as string, {
    db: {
      schema: "public",
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      headers: headers,
    },
  });
}
