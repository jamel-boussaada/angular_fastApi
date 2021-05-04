from typing import Optional
from fastapi import FastAPI ,Request
import json
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from datetime import date
import mysql.connector
from fastapi.openapi.models import Response
from fastapi.middleware.cors import CORSMiddleware
import requests
import urllib.parse
import urllib.request


app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class prod(BaseModel):
    id:int;
    typpe : str
    prix : int
    discription : str
    image : str 
    nom : str
    
@app.post("/ajouterproduit")
async def add(request:Request):
    print("ok")
    mydb = mysql.connector.connect(host ="localhost" , user = "root" , password = "" , database = "miniweb")
    mycursor = mydb.cursor()
    body = json.loads(await request.body())
    mycursor.execute(f"INSERT INTO produit (`typpe`, `prix`, `discription`, `image`, `nom`) VALUES ('{body['typpe']}','{body['prix']}','{body['discription']}','{body['image']}','{body['nom']}');")
    mydb.commit()
    return "succes" 
    
    
    
@app.get("/produit")
async def get():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "miniweb")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM produit")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/idprod")
async def post1(id:int):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "miniweb")
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT * FROM produit where id={id}")
    row_headers=[x[0] for x in mycursor.description]  
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data


@app.post("/supp")
async def post2(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "miniweb")
    mycursor = mydb.cursor()
    body = json.loads(await request.body())
    mycursor.execute(f"DELETE FROM produit where (id='{body['id']}')")
    mydb.commit()
    return "succes" 


@app.post("/modifier")
async def post3(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "miniweb")
    mycursor = mydb.cursor()
    body = json.loads(await request.body())
    mycursor.execute(f"UPDATE  produit SET (`id`='{body['id']}') AND (`nom`='{body['nom']}')AND (`discription`='{body['discription']}')AND (`prix`='{body['prix']}')AND(image ='{body['image']}')AND (`typpe`='{body['ryppe']}') ")
    mydb.commit()
    return "succes" 