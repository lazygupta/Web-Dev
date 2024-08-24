# Express JS
// Its a npm package and a framework
// Framework -> Restrictions, Give entire flow of how the work is to be done
// manages eveyrthing from receving the request and giving the response

// Middleware - Work done between sending request and just before reaching the routes server

## Usecases

<!-- Middlewares  request aur response ke beech mein communication handle karta hai. Socho ise ek chowkidaar ki tarah jo gate ke andar jaane se pehle aur baahar aane se pehle sab cheezein check karta hai.

Ek common use case JavaScript mein express.js framework ke saath hai. Imagine tum ek website bana rahe ho jahan users apne profile ko update kar sakte hain. Lekin tum chahte ho ki sirf logged-in users hi apna profile update kar sakein. Ab yeh middleware ki madad se aasan ho jaata hai.

Jab user apna profile update karne ki request bhejta hai, woh request sabse pehle middleware ke through jaati hai. Yeh middleware check karta hai ki user logged-in hai ya nahi. Agar user logged-in hai toh request aage badhti hai aur profile update ho jaata hai. Lekin agar user logged-in nahi hai toh middleware request ko rok deta hai aur user ko login karne ke liye kehta hai.

Toh, Middlewares ka basic kaam hai request aur response ke beech mein aane wali cheezon ko control karna, jaise authentication, logging, data validation, etc. -->