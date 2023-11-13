import Form from "@/app/components/contact/Form";
import NavBar from "@/app/components/shared/NavBar";

export default function Contact() {
  return (
    <>
      <div className="bg-white min-h-screen dark:bg-black transition-colors">
        <NavBar />
        <div className="py-24" />
        <Form />
      </div>
    </>
  );
}
