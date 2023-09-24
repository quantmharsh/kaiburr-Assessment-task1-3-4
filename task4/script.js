document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://127.0.0.1:8080/servers"; // Replace with your actual API URL

    // Get Server by ID
    document.getElementById("getServerById").addEventListener("click", () => {
        const serverId = document.getElementById("serverId").value;
        fetch(`${apiUrl}/getServer?id=${serverId}`)
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });

    // Get Server by Name
    document.getElementById("getServerByName").addEventListener("click", () => {
        const serverName = document.getElementById("serverName").value;
        fetch(`${apiUrl}/getServer?name=${serverName}`)
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });

    // Create New Server
    document.getElementById("createServer").addEventListener("click", () => {
        const newServerName = document.getElementById("newServer").value;
        const newServerLanguage = document.getElementById("newServerLanguage").value;
        const newServerFramework = document.getElementById("newServerFramework").value;

        // Check if required fields are empty
        if (!newServerName || !newServerLanguage || !newServerFramework) {
            alert("Please fill in all fields.");
            return;
        }

        const serverData = {
            name: newServerName,
            language: newServerLanguage,
            framework: newServerFramework,
        };

        fetch(`${apiUrl}/createServer`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(serverData),
        })
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("result").innerHTML = data;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
