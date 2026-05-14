export async function sendSession(session) {
    const response = await fetch("http://127.0.0.1:8000/profiles/me", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${session.access_token}`,
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data
}