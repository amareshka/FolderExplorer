import { useState } from "react";

const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false);

    //console.log(explorer);
    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span> 📁 {explorer.name}</span>
                </div>
                <div style={{ display: expand ? "block" : "none", marginLeft: 20 }}>
                    {explorer.items.map((exp,) => {
                        return <Folder explorer={exp} key={exp.id} />
                    })}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="file">
                📄 {explorer.name}
            </div>
        )
    }
}

export default Folder;