const  homecontroller = (req,res)=>{
    const data ={
        name: "Yoga",
        age:1,
    }
    
    res.render("index",data);
}
export{homecontroller}