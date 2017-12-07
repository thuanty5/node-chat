let messageList = [];
let id = 0;


let create = (req,res,next)=>{
    const {text, time} = req.body;
    messageList.push({id, text, time});
    id++;
    res.status(200).json(messageList);
}

let read = (req,res,next)=>{
    if(req.params.id){
        let id = req.params.id;
        res.status(200).json(messageList[id]);
    }else{
      res.status(200).json(messageList)  
    }
}

let update = (req,res,next)=>{
    const updateID = +req.params.id;

    let index = messageList.findIndex(message => message.id === updateID)
    messageList[index] = {
        id: messageList[index].id,
        text: req.body.text || messageList[index].text,
        time: req.body.time || messageList[index].time
    };
    res.status(200).send(messageList);
}

let destroy = (req,res,next) => {
    const deleteID = req.params.id;
    const index = messageList.findIndex(message => message.id === deleteID);
    messageList.splice(index, 1);
    res.status(200).send(messageList);
}

module.exports = {
    create,
    read,
    update,
    destroy
}