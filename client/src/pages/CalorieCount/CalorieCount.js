import React, { Component } from "react";
// import SomeComponent from "../../components/SomeComponent";
// import API from "../../utils/API";
import './CalorieCount.css';
import {
    Jumbotron,
    Modal,
    Button,
    Form
} from "reactstrap";
import Caldisplay from "../../components/Caldisplay";
import Wrapper from "../../components/Wrapper";
import Container from "../../components/Container";
import FoodDisplay from "../../components/FoodDisplay";
import SnapFoodBtn from "../../components/SnapFoodButton";
import VideoModal from "../../components/VideoModal";
import BarcodeModal from "../../components/BarcodeModal";
import TextInputModal from "../../components/TextInputModal";

class CalorieCount extends Component {
    state = {
        dailyGoal: 2200,
        actual: 500,
        remaining: 0,
        isVideoModalOpen: false
    };

    componentDidMount() {
        // calculates remaining calories for day
        this.setState({ remaining: this.state.dailyGoal - this.state.actual })
    }

    toggleModal = () => {
        console.log(`modal state is: ${this.state.isVideoModalOpen}`)
        this.setState({
            isVideoModalOpen: !this.state.isVideoModalOpen
        });
        console.log(`modal state is: ${this.state.isVideoModalOpen}`)
    }

    snapFood = event => {
        // event.preventDefault();
        console.log("click is working")
        this.toggleModal()
    }

    // handle the form search button to kick off the search to the NYT
    handleSearchSubmit = event => {
        event.preventDefault();

        // API.hitapi({
        // })
        //     .then(res => {
        //             return res
        //         })
        //     })
        //     .catch(err => console.log(err));
    }

    // Generic component state handler when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render(props) {
        return (
            <Wrapper {...props}>
                <div>Welcome to using Auth0, {this.props.name}</div>
                <Container>
                    <Caldisplay
                        dailyGoal={this.state.dailyGoal}
                        actual={this.state.actual}
                        remaining={this.state.remaining}
                    />
                    {/* <SnapFoodBtn onClick={() => this.snapFood()} /> */}
                    <div class="row">
                    <VideoModal isOpen={this.state.isVideoModalOpen}
                        onClose={this.toggleModal} buttonLabel="Snap Food!!">
                        Here's some content for the modal
                    </VideoModal>
                    <BarcodeModal>
                        Here's some content for the modal
                    </BarcodeModal>
                    <TextInputModal>
                        Here's some content for the modal
                    </TextInputModal>
                    </div>
                    <FoodDisplay>
                        {/* will map through DB results when built       */}
                        {/* {this.state.foodItems.map(food-item => (
                                
                                ))} */}
                    </FoodDisplay>
                </Container>

            </Wrapper>

        );

    }

};


export default CalorieCount;