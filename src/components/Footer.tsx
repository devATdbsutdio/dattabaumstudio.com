export default function Footer() {
  return (
    <footer className="w-full flex flex-col text-white text-center xl:flex-row xl:items-center xl:py-10 xl:px-7">
      <p className="text-opacity-70 p-5 border-y xl:border-none border-neutral-700 xl:order-1">
        © 2023 Datta+Baum
      </p>
      <div className="p-5 flex flex-col xl:order-3 md:flex-row md:py-0 xl:p-0 md:justify-between xl:items-center xl:ml-auto">
        <a
          href="/disclaimer"
          className="hover:bg-neutral-950 transition-colors p-5"
        >
          Disclaimer
        </a>
        <a href="/terms" className="hover:bg-neutral-950 transition-colors p-5">
          Terms & Conditions
        </a>
        <a
          href="/privacy"
          className="hover:bg-neutral-950 transition-colors p-5"
        >
          Privacy Policy
        </a>
        <a
          href="/returns"
          className="hover:bg-neutral-950 transition-colors p-5"
        >
          Returns & Refunds
        </a>
        <a
          href="/contact"
          className="hover:bg-neutral-950 transition-colors p-5"
        >
          Contacts
        </a>
      </div>
      <div className="flex border-y xl:border-none border-neutral-700 xl:order-2">
        <a
          href="#"
          className="hover:bg-neutral-950 transition-colors p-5 w-full border-r border-neutral-700 xl:border-none"
        >
          Github
        </a>
        <a
          href="#"
          className="hover:bg-neutral-950 transition-colors p-5 w-full"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
