// Setup
const contacts = [
    {
      firstName: "Van",
      lastName: "Nguyen",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Pho"],
    },
    {
      firstName: "Son",
      lastName: "Trinh",
      number: "0994372684",
      likes: ["Cheese", "Donut", "Apple"],
    },
    {
      firstName: "Trong",
      lastName: "Le",
      number: "0487345643",
      likes: ["Beer", "King Crab"],
    },
    {
      firstName: "Tong",
      lastName: "Vo",
      number: "unknown",
      likes: ["Tiger", "Sword", "Wine"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Chỉ code phía dưới này
 let info = contacts.find(i=>i.firstName == name);
 if(info){
     let att = info [prop];
     if(att)
     console.log(info[prop]);
     else console.log("Không tồn tại thông tin trên";)
 }
 else console.log("Không tồn tại thông tin trên");
    // Chỉ code phía trên này
  }
  
  lookUpProfile("Van", "likes");
  
  