import React, { useCallback, useEffect, useState } from 'react';

const NewsOverlay = (props) => {
    const isNews = (props.genre === 'news');
    const [title, setTitle] = useState('');
    const [notice, setNotice] = useState('');
    const [msg, setMsg] = useState('');
    const [by, setBy] = useState('');
    const newsFetchHandler = useCallback(async()=>{
        try{
            const response = await fetch('http://localhost:3030/'+props.genre+'/'+props._id);
            if(!response.ok) throw new Error(props.genre+'Something Went Wrong');
            const data = await response.json();
            console.log(data.title);
            setTitle(data.title);
            setMsg(data.msg);
            if(props.genre === 'news') setNotice(data.notice);
            else setBy(data.by);
        }catch(error){
            
            console.log(error);
            console.log(props.genre+"Overlay me Ku ch Galat Ho Gya");
        }
    },[props._id]);
  
    useEffect(()=>{
        newsFetchHandler();
    }, [newsFetchHandler]);

    let msgColor =  'text-danger';
    if(isNews) msgColor ='text-secondary';
    
    return (
        <div className=" modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content"  style={{whiteSpace: 'pre-line' }} data-dismiss="modal">
                    <div className="modal-header" >
                        <h5 className="text-dark modal-title" id="exampleModalLongTitle">
                            <b>{title}</b>
                            </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="text-secondary modal-body"
    //                 style={{
    //   maxWidth: 'auto',
      
    //   minHeight: '500px',
    //   overflowX: 'auto'
    //  }}
     >
                        {isNews && 
                            <div  className="text-success" >
                            {notice}
                            </div>
                        }                        
                        <div className='overflow-auto '>
                            <div className={msgColor}>
                        {msg}
                            </div>
                        </div>

                        
                        {!isNews && 
                            <div  className= "text-secondary" >
                            <br/>
                            - {by}
                            </div>
                        }
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>);
}
export default NewsOverlay;