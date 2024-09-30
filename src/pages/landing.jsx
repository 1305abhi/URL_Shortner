import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-2xl lg:text-3xl text-white text-center font-extrabold">
        Drop Your URL here.... 👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-20 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          placeholder="Enter your loooong URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button type="submit" className="h-full" variant="destructive">
          Shorten!
        </Button>
      </form>
      <div className="py-20 ">
        <div className="py-10 lg:text-3xl sm:text-2xl font-bold font-serif">The URL Shortener You Wanted</div> 
        <div className="font-semibold font-mono">Create shorter URLs with RapidURL. Want more
        out of your link shortener? Track link analytics, use branded domains
        for fully custom links, and manage your links as well seamlessly...!<br /><br/>Have Funnnnn.....</div>
      </div>
    </div>
  );
};

export default LandingPage;
