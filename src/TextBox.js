/**
 * @file TextBox
 * @author leon(ludafa@outlook.com)
 */

const React = require('react');
const ReactDOM = require('react-dom');

const TextBoxInput = require('./textbox/Input');
const Validity = require('./Validity');

const cx = require('melon-classname').create('TextBox');

let TextBox = React.createClass({

    getInitialState() {

        const {
            value
        } = this.props;

        return {
            isFocus: false
        };

    },

    onFocus(e) {

        var {
            onFocus,
            validate,
            value
        } = this.props;

        if (onFocus)  {
            onFocus({
                type: 'focus',
                target: this
            });
        }

        this.setState({
            isFocus: true
        });

        if (this.needValidate('focus')) {
            validate(value);
        }

    },

    onBlur(e) {

        const {
            onBlur,
            value,
            validate
        } = this.props;

        if (onBlur)  {
            onBlur({
                type: 'blur',
                target: this
            });
        }

        this.setState({
            isFocus: false
        });

        if (this.needValidate('blur')) {
            validate(value);
        }

    },

    onChange(e) {

        var value = e.target.value;

        const {
            onChange,
            validate
        } = this.props;

        onChange({
            type: 'change',
            target: this,
            value: value
        });

        if (this.needValidate('change')) {
            validate(value);
        }

    },

    componentWillReceiveProps(nextProps) {

        const {value} = nextProps;

        // 多行文本框应该可以自动更新高度
        if (nextProps.multiline && this.props.value !== value) {
            this.syncTextareaHeight();
        }

    },

    syncTextareaHeight() {

        const {
            input
        } = this;

        if (input) {
            input.style.height = 'auto';
            input.style.height = input.scrollHeight + 'px';
        }

    },

    needValidate(eventName) {
        return this.props.validateEvents.indexOf(eventName) !== -1;
    },

    render() {

        const {
            onFocus,
            onBlur,
            onChange,
            props
        } = this;

        const {
            className,
            value,
            validity,
            ...rest
        } = props;

        const {
            isFocus
        } = this.state;

        const statefulClassName = cx(props)
            .addStates({
                focus: isFocus,
                fulfilled: !!value
            })
            .build();

        return (
            <div className={statefulClassName}>
                <TextBoxInput
                    {...rest}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    isFocus={isFocus}
                    value={value}
                    ref={(input) => {
                        if (input) {
                            this.input = ReactDOM.findDOMNode(input);
                        }
                    }} />
                <Validity validity={validity} />
            </div>
        );

    }

});

TextBox.defaultProps = {
    value: '',
    defaultValue: '',
    validateEvents: ['change', 'blur']
};

const {PropTypes} = React;

TextBox.propTypes = {

    type: PropTypes.oneOf(['text', 'password']),

    value: PropTypes.string,
    defaultValue: PropTypes.string,

    placeholder: PropTypes.string,

    multiline: PropTypes.bool,

    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func

};

module.exports = require('./createInputComponent').create(TextBox);
