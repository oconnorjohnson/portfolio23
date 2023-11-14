import SideBarNav from "@/app/components/admin/SideBarNav";
import NavBar from "@/app/components/shared/NavBar";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavBar />
      <div className="flex">
        <div className="w-64 bg-black min-h-screen">
          <SideBarNav />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </html>
  );
}
