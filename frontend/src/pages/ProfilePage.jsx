function ProfilePage({ profile }) {
    if (!profile) {
        return <p>Loading profile...</p>

    }

    return (
        <div>
            <h2>{profile.username}</h2>
            <br></br>
            <p>Level: {profile.level}</p>
            <p>EXP: {profile.exp}</p>
        </div>
    )
}

export default ProfilePage;