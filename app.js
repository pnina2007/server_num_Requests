const http = require('http'); // ערכת הכלים הבסיסית של הרשת

let visitCount = 0; // משתנה שסופר כמה פעמים נכנסו

// יוצרים את השרת
const server = http.createServer((req, res) => {
  
  // אם ביקשו את הכתובת /requests
  if (req.url === '/requests') {
    visitCount++; // מוסיפים 1 למונה
    
    // מחזירים תשובה ללקוח
    res.end(JSON.stringify({ count: visitCount }));
  } 
});

// אומרים לשרת להתחיל להקשיב בפורט 5050
server.listen(5050, () => {
  console.log('השרת רץ ומוכן!');
});