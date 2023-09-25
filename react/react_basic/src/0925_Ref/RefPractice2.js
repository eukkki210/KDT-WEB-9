import { useRef, useState } from "react";

export default function RefPractice2() {
    const [inputWriter, setInputWriter] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [comments, setComments] = useState([]);

    const writerInputRef = useRef();
    const titleInputRef = useRef();

    const onChange = (event) => {
        setInputWriter(event.target.value);
    }

    const addComment = () => {
        if (inputWriter.trim() === "") {
            writerInputRef.current.focus();
            return;
        }
        if (inputTitle.trim() === "") {
            titleInputRef.current.focus();
            return;
        }
        const newComment = {
            writer: inputWriter,
            title: inputTitle,
        }
        setComments([...comments, newComment]);
        setInputTitle('');
        setInputWriter('');
    }

    return <div>
        <div>
            <form>
                <label htmlFor="writer">작성자 : </label>
                <input
                    id="writer"
                    type="text"
                    value={inputWriter}
                    ref={writerInputRef}
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor="title"> 제목 : </label>
                <input
                    id="title"
                    type="text"
                    value={inputTitle}
                    ref={titleInputRef}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
            </form>
            <button type="button" onClick={addComment}>작성</button>
        </div>
        <br />
        <div>
            <select>
                <option>작성자</option>
            </select>
            <input placeholder="검색어" />
            <button>검색</button>
        </div>
        <br />
        <div>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((value, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.title}</td>
                            <td>{value.writer}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
}
