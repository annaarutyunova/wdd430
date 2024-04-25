Instructions to build an application

npm init
npm install -D tailwindcss (-D means a development dependency,  whatever that means)
npx tailwindcss init
add `  content: ["./src/**/*.{html,js}"],` to tailwind.config.js
create a src folder at root and create input.css file
insert these lines in input.css : 
```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch