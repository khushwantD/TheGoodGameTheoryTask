import { useContext, useEffect } from "react"
import ContextPage from "../ContextPage"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PageBtn() {
    const { page, setPage, getBeerNextPage } = useContext(ContextPage);

    useEffect(() => {
        getBeerNextPage()
    },[page])

  return (
    <div className='page-btnPanel'>
        <button className="page-btn" onClick={() => setPage(page - 1)}>
            <IoIosArrowBack />
        </button>
        <div className="page-count">
            {page}
        </div>
        <button className="page-btn" onClick={() => setPage(page + 1)}>
            <IoIosArrowForward />
        </button>
    </div>
  )
}

export default PageBtn