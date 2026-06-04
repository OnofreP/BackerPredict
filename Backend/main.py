from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def Hola():
    return {"message": "Hola Mundo!"}