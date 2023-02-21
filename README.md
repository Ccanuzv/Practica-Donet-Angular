# Practica-Donet-Angular
# Por favor ejecutar los siguiente comandos Dotnet
# en el directorio Backend
dotnet ef database update modelo-recuperacion1 --project .\Backend.csproj
# configurar los secretos del usuario
{
  "ConnectionStrings": {
    "PostgreSQLConnection": "Server=127.0.0.1;Port=5432;Database=nombre_db;User Id=postgres;Password=passs",
    "correo": "correo@gmail.com",
    "pass": "pass de email"
  }
}

# en angular ejecutar el comando 
npm install

