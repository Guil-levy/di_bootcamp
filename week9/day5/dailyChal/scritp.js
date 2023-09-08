function formatDate(date) {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString(); // Add 1 to months
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds().toString();
  
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  }
  

  
  
  


