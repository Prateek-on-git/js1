const myObject={
    js:'Javasc',
    cpp:'cpp+',
    rb:'ruby'
}

for (const key in myObject) {
   console.log(myObject[key])
        
    }
//for of doesn't work on objects, for in loop works for object