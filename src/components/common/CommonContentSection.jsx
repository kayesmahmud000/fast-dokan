export default function CommonContentSection({ headerContent, MainContent }) {
  <div className="flex flex-col gap-3">
    <h1 className="font-semibold text-2xl md:text-[2.2rem]">{headerContent}</h1>
    <div className="p-4 border-gray-200 border rounded-2xl flex flex-col gap-3">
      {MainContent}
    </div>
  </div>;
}
