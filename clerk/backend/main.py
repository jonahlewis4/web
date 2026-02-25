from fastapi import FastAPI, Header, HTTPException, Depends
from jose import jwt
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

origins = [
    "http://localhost:5174",
    "http://127.0.0.1:5174",
]

# 3. Add the middleware to your app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allows GET, POST, OPTIONS, etc.
    allow_headers=["*"], # Allows Authorization headers
)

# Get this from your Clerk Dashboard (under API Keys -> Advanced)
CLERK_PEM_PUBLIC_KEY = "KEY GOES HERE"



def get_current_user(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Unauthorized")

    token = authorization.split(" ")[1]

    try:
        # Verify the token using Clerk's Public Key
        payload = jwt.decode(token, CLERK_PEM_PUBLIC_KEY, algorithms=["RS256"], audience="https://actual-newt-51.clerk.accounts.dev")
        return payload  # This contains the user's clerk_id
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid token")


@app.get("/api/data")
async def secure_data(user=Depends(get_current_user)):
    return {"message": f"Hello User {user['sub']}, this is private data!"}