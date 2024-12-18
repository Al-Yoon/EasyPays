const getUser = async(id,setPerfil) => {

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  
    let response = await fetch(`http://localhost:8080/api/users/${id}`, requestOptions);
  
    let jsonData = await response.json();
    console.log(jsonData);
    try{
      setPerfil({
        id:jsonData.id,
        user:jsonData.username,
        nombre:"", // name:jsonData.name,
        lastName:"", //lastName:jsonData.lastName,
        email:jsonData.email,
        contrasenia:jsonData.contrasenia,
      });
    }catch (error) {
    console.error('fallos', error);
    setPerfil();
    }
  
  }
  
  const updateUser = async(id,user) =>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify(user);
  
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  
    let response = await fetch(`http://localhost:8080/api/users/${id}`, requestOptions);
    const jsonData = await response.json();
    return jsonData;
  }
  
  const deleteUser = async(id) =>{
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };
    
    let response = await fetch(`http://localhost:8080/api/users/${id}`, requestOptions);
    return response;
  }
  
  export {getUser,updateUser,deleteUser};