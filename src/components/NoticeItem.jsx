import { useState } from "react"
import ReactMarkdown from "react-markdown"
import NoticeAlert from "./NoticeAlert"

const NoticeItem = ({ notice }) => {

  const [open, setOpen] = useState(false)

  function onShow() {
    setOpen(true)
  }

  function onClose() {
    setOpen(false)
  }

  return (

    <>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-800">{notice.title}</dt>
        <dd className="mt-1 flex text-sm leading-6 text-gray-600 sm:col-span-2 sm:mt-0">
          <span className="flex-grow">
            <ReactMarkdown>{notice.description}</ReactMarkdown>
          </span>
          <span className="ml-4 flex-shrink-0">
            {(notice.images.length > 0 || notice.description2.length > 0) &&
              (<>
                <button type="button" onClick={onShow} className="rounded-md bg-white font-medium text-blue-600 hover:text-blue-400">
                  więcej
                </button>
                <NoticeAlert open={open} onClose={onClose} images={notice.images} title={notice.title} description={notice.description2} />
              </>)

            }

          </span>
        </dd>
      </div>
    </>

  )
}

export default NoticeItem