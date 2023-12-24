export default function Alert({error,success}){
    return(
        <div className="alert_msg">
            {error.length>0 &&  <h3 className="msg_error">{error}</h3>}
            {success.length>0 &&  <h3 className="msg_success">{success}</h3>}
            
        </div>

    )
}