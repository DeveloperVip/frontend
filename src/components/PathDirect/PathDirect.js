import React from 'react'
import "./PathDirect.css"
import { Link } from 'react-router-dom'

const PathDirect = ({name}) => {
  return (
    <>
        <section className=" path-direct">
            <p><strong>{name.toUpperCase()}</strong></p>
            <div className='group'>
                <span>
                    <Link to="/home">TRANG CHỦ </Link>
                    </span><>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
                        </><span>
                            <Link>{name.toUpperCase()}</Link>
                        </span>
            </div>
        </section>
    </>
  )
}

export default PathDirect