from fastapi import Header, HTTPException
from app.database import supabase

def get_current_user(authorization: str | None = Header(default=None)):
    if authorization is None:
        raise HTTPException(status_code=401, detail="Missing Auth header")
    
    token = authorization.replace("Bearer ", "")
    
    try:
        response = supabase.auth.get_user(token)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid Token")
    
    if response.user is None:
        raise HTTPException(status_code=401, detail="Invalid token")
    
    return response.user