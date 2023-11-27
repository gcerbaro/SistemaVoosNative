## Mobile Front-end using the SistemadeVoosKotlin Back-end API
*Description*
 - This is the client-side part of an application for a flying company.
 - Originally developed as an assignment for Web and Mobile Programming in the University of Passo Fundo's 
 Computer Science course
 - Still in development
 - No authentication implemented on the client side yet, it means it will run in "admin mode" all the time (all features available without restriction)

---
 - *Tecnologies*
     - Framework
       - Expo
       - React.JS
     - Language
       - Javascript
       - Typescript
  - *Installation*
    - GIT clone https://github.com/gcerbaro/SistemaVoosNative.git
    - Open a terminal/command prompt and type:
      - cd "C:/downloaded_repository_path" to enter the repository's diretory
      - still on the terminal, type: npm install
      - This will install all the dependencies needed for the app's functioning
      - The non realization of the two steps above will incur in the impossibility of running the app
      - *IMPORTANT*
        - This app requires the back-end API SistemadeVoosKotlin to be running.
        - Since the API is not, as of now (November 2023), hosted in any third-party server nor in any domain, it'll be necessary to download it and run it natively yourself.
        - Go to https://github.com/gcerbaro/SistemaVoosKotlin and follow the steps available in the README.md file to download it and run it.
        - If the API is set to run in the same machine as the client-side, no alterations in the file's content will be required.
        - If the API is set to run in a different machine from the client-side, it'll be necessary to open the files in "/services" and change the IP address inside of the
          BASE_URL const variable to that of the machine that's running the server-side application. Make sure to not alter the ":8080" part of the variable since this is pertaining to
          which port is beign used, which is surely going to be 8080, change the IP value exclusively. If the front-end and back-end are running in the same machine, this const BASE_URL
          value is and must still going to be "http://localhost:8080" as in the original downloaded form, do not alter it.
        - It is also advised to have NodeJS, Expo and NPM, NPX or Yarn installed and up to date in your machine for the correct functioning of this application.
        - If all these conditions are not met, the success on running the app is not guaranteed. 
---
### Credits

- Giovanni Assonalio Cerbaro ([@gcerbaro](https://github.com/gcerbaro)) - Developer
- Nicolas Comin Todero (193521@upf.br) - Developer

### License
This project is licensed under the MIT License
