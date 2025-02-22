import React, {useState} from 'react'
import './Comments.css'
function DisplayComments({cId,commentBody,userCommented}) {
  const [Edit,setEdit]=useState(false);
  const [cmtBdy, setcmtBdy] = useState("");
  const handleEdit = (ctId,ctBdy)=>{
    setEdit(true)
    setcmtBdy(ctBdy)
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    setEdit(false);
  }
  return (
    <>
    {
      Edit ? (<> 
        <form className="comments_sub_form_comments" 
        onSubmit={handleOnSubmit}
        >
        <input
          type="text"
          onChange={(e) => setcmtBdy(e.target.value)}
          placeholder="Edit comment"
          value={cmtBdy}
          className="comment_ibox"
        />
        <input type="Submit"
         value="Change" 
         className="comment_add_btn_comments" />
      </form></>) :
      (<>  <p className='comment_body'>{commentBody}</p></>)
    }
    
     <p className='userConnected'> - {userCommented} commented</p>
     <p className='EditDel_displayComment'>
      <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
      <i>Delete</i>
     </p>
    </>
  )
}

export default DisplayComments
