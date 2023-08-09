import NoticeItem from "./NoticeItem"


function NoticesList({notices}) {


  // <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
  //<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">

  return (
    <section id="notices" className="mx-auto max-w-5xl px-6 py-24 sm:py-36 lg:px-8">
      <div className="px-4 sm:px-0 mb-8">
        <p className="uppercase text-blue-600 font-semibold ">Informacje bieżące</p>
        <h3 className="text-3xl font-semibold leading-10 tracking-tight text-gray-800">Tablica ogłoszeń</h3>
      </div>
      <div className="mt-6 border-t border-gray-900/10">
        
        <dl className="divide-y divide-gray-900/10">
           {/* dl item */}
         {notices.map(notice => <NoticeItem key={notice.id} notice={notice}/>)}


        </dl>
      </div>
    </section>
  )
}

export default NoticesList;

