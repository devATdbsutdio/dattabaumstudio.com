export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="dbs-container flex flex-col text-center text-white xl:flex-row xl:items-center xl:px-7 xl:py-10">
        <p className="border-y border-neutral-700 p-5 text-white/70 text-opacity-70 xl:order-1 xl:border-none">
          © 2023 Datta+Baum
        </p>
        <div className="flex flex-col p-5 md:flex-row md:justify-between md:py-0 xl:order-3 xl:ml-auto xl:items-center xl:p-0">
          <a
            href="/disclaimer"
            className="p-5 transition-colors hover:bg-neutral-950"
          >
            Disclaimer
          </a>
          <a
            href="/terms"
            className="p-5 transition-colors hover:bg-neutral-950"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy"
            className="p-5 transition-colors hover:bg-neutral-950"
          >
            Privacy Policy
          </a>
          <a
            href="/returns"
            className="p-5 transition-colors hover:bg-neutral-950"
          >
            Returns & Refunds
          </a>
          <a
            href="/contact"
            className="p-5 transition-colors hover:bg-neutral-950"
          >
            Contacts
          </a>
        </div>
        <div className="flex border-y border-neutral-700 xl:order-2 xl:border-none">
          <a
            href="https://github.com/devATdbsutdio"
            className="w-full border-r border-neutral-700 p-5 transition-colors hover:bg-neutral-950 xl:border-none"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/dattabaum"
            className="w-full p-5 transition-colors hover:bg-neutral-950"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
