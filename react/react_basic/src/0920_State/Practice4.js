import { Component } from "react";

class Practice4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputWriter: "",
            inputTitle: "",
            comments: [],
            inputSearch: "",
            searchType: "title",
            results: [],
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    addComment = () => {
        const { inputWriter, inputTitle, comments } = this.state;
        const newComment = {
            writer: inputWriter,
            title: inputTitle,
        };
        this.setState({
            comments: [...comments, newComment],
            inputTitle: "",
            inputWriter: "",
        });
    };

    searchComment = () => {
        const { comments, inputSearch, searchType } = this.state;
        const searchResult = comments.filter((value) => {
            const type = value[searchType];
            const include = type.includes(inputSearch);
            return include;
        });
        this.setState({
            results: searchResult,
        });
    };

    render() {
        const {
            inputWriter,
            inputTitle,
            comments,
            inputSearch,
            searchType,
            results,
        } = this.state;

        return (
            <div>
                <div>
                    <form>
                        <label htmlFor="inputWriter">작성자 : </label>
                        <input
                            id="inputWriter"
                            type="text"
                            value={inputWriter}
                            onChange={this.onChange}
                        />
                        <label htmlFor="inputTitle"> 제목 : </label>
                        <input
                            id="inputTitle"
                            type="text"
                            value={inputTitle}
                            onChange={this.onChange}
                        />
                    </form>
                    <button type="button" onClick={this.addComment}>
                        작성
                    </button>
                </div>
                <br />
                <div>
                    <form>
                        <select
                            value={searchType}
                            onChange={this.onChange}
                            id="searchType"
                        >
                            <option value="writer">작성자</option>
                            <option value="title">제목</option>
                        </select>
                        <input
                            type="text"
                            placeholder="검색어"
                            value={inputSearch}
                            onChange={this.onChange}
                            id="inputSearch"
                        />
                        <button type="button" onClick={this.searchComment}>
                            검색
                        </button>
                    </form>
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
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.title}</td>
                                        <td>{value.writer}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <br />
                <div>
                    <h4>검색결과</h4>
                    <table border={1} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.title}</td>
                                        <td>{value.writer}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Practice4;
