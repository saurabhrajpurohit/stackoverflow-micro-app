import React from "react";

import Dialog from "./Dialog";
import Question from "./Question";
import ScrollComponent from "./ScrollComponent";
import { getQuestion } from "../service/Service";

//State Object is defined Here
interface state { 
    questions: Array<any>, 
    page: number, 
    loading: boolean, 
    questionDialog: boolean,
    selectedQuestion: any 
}

export default class MainApp extends React.Component<{},state > {

    constructor(props: any) {
        super(props);
        this.state = {
            questions: [],
            page: 1,
            loading: false,
            questionDialog: false,
            selectedQuestion: {
                title: ""
            }
        }
    }

    componentDidMount() {
        this.getQuestions(this.state.page);
    }

    /**
     * The funciton takes page number as input and calls the API to fetch the questions
     * @param page Page Number
     */
    getQuestions(page: number) {
        this.setState({ loading: true })
        getQuestion(page).then(response => {
            this.setState({
                questions: [...this.state.questions, ...response.items],
                loading: false
            });
        })
    }

    /**
     * Function to load more questions, called at the time of scrolling
     */
    loadMore() {
        this.setState({
            page: this.state.page + 1,
        }, () => {
            this.getQuestions(this.state.page);
        })
    }

    /**
     * Sets the clicked question in state and open the popup
     * @param question Selected Question Object
     */
    onQuestionClick(question: Object) {
        this.setState({
            questionDialog: true,
            selectedQuestion: question
        })
    }

    render() {
        const { questions, loading, selectedQuestion } = this.state;
        return (
            <div className="container vh-100">
                <div className="col-12 pt-5 mb-5">
                    <div className="row">
                        <div className="col-12">
                            <h2>Stackoverflow Micro App</h2>
                        </div>
                        <div className="col-12">
                            <p><strong>Welcome Back!</strong></p>
                        </div>
                    </div>
                </div>
                
                <div className="col-12">
                    <ScrollComponent target="questions-div" onNext={() => this.loadMore()} isLoading={loading}>
                        <div id="questions-div">
                            {questions.map((question: any, index: number) => (
                                <Question key={index} question={question} onClick={() => this.onQuestionClick(question)} />
                            ))}
                        </div>
                    </ScrollComponent>
                </div>

                <div hidden={!loading} className="col-12">
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                </div>

                <Dialog isOpen={this.state.questionDialog} title={selectedQuestion.title}>
                    <div className="row text-left">
                        <div className="col-12">
                            <h5 className="modal-title text-left" id="exampleModalLabel">{selectedQuestion.title}</h5>
                        </div>
                        <div className="col-12">
                            <a title="Open in new Tab" href={selectedQuestion.link} target="_blank" rel="noopener noreferrer">Go To Question <i className="fa fa-external-link"></i></a>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}