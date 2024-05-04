/* eslint-disable react/prop-types */
import'./animate.scss'

function Animate({letterClass, strArray, idx}) {
  return (
 <span className="second">
    {
        strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
        </span>
         ) )
    }
 </span>
  )
}

export default Animate