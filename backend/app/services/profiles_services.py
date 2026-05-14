from app.database import supabase

def create_or_load_profile_data(user_id: str, email: str):
    existing_profile = (
        supabase
        .table("profiles")
        .select("*")
        .eq("id", user_id)
        .execute()
    )
    
    if existing_profile.data:
        return existing_profile.data[0]
    
    username = email.split("@")[0]
    
    new_profile = (
        supabase
        .table("profiles")
        .insert({
            "id": user_id,
            "username": username,
            "level": 1,
            "exp": 0,
            "streak": 0,    
        })
        .execute()
    )
    
    return new_profile.data[0]
    