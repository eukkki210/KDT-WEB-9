import React, { Component } from "react";

class RefPractice1 extends Component {

    constructor(props) {
        super(props);

        // 초기화
        this.state = {
            inputWriter: "",
            inputTitle: "",
            comments: [],
        };

        this.writerInputRef = React.createRef();
        this.titleInputRef = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    onChange(event) {
        this.setState({ inputWriter: event.target.value });
    }

    addComment() {
        if (this.state.inputWriter.trim() === "") {
            this.writerInputRef.current.focus();
            return;
        }
        if (this.state.inputTitle.trim() === "") {
            this.titleInputRef.current.focus();
            return;
        }
        const newComment = {
            writer: this.state.inputWriter,
            title: this.state.inputTitle,
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            inputTitle: '',
            inputWriter: '',
        })
    }

    render() {
        const { inputWriter, inputTitle, comments } = this.state;
        return <div>
            <div>
                <form>
                    <label htmlFor="writer">작성자 : </label>
                    <input
                        id="writer"
                        type="text"
                        value={inputWriter}
                        ref={this.writerInputRef}
                        onChange={(e) => this.onChange(e)}
                    />
                    <label htmlFor="title"> 제목 : </label>
                    <input
                        id="title"
                        type="text"
                        value={inputTitle}
                        ref={this.titleInputRef}
                        onChange={(e) => this.setState({ inputTitle: e.target.value })}
                    />
                </form>
                <button type="button" onClick={this.addComment}>작성</button>
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
    };

}

export default RefPractice1;