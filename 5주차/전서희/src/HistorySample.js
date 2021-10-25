import React, {
    Component
} from 'react';

class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    };

    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        //이것을 설정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문함
        this.unblock = this.props.history.block('정말 떠나실건가요?');
    }

    componentWillUnmount() {
        if (this.unblock) {
            this.unblock();
        }
    }
    render() {
        return ( <
            div >
            <
            button onClick = {
                this.handleBoBack
            } > 뒤로 < /button> <
            button onClick = {
                this.handleBoHome
            } > 홈으로 < /button> <
            /div>
        );
    }

}
export default HistorySample;