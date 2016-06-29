/**
 * @file melon demo button
 * @author leon(ludafa@outlook.com)
 */

import React from 'react';

import Title from 'melon/Title';
import Button from 'melon/Button';
import TextBox from 'melon/TextBox';
import Select from 'melon/Select';
import BoxGroup from 'melon/BoxGroup';
import Toggle from 'melon/Toggle';
import Calendar from 'melon/Calendar';
import Uploader from 'melon/Uploader';

import Form from '../src/Form';

/* eslint-disable no-console */

class View extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'ludafa',
            email: 'ludafa@outlook.com',
            sex: '',
            fruit: [],
            fruits: [],
            date: '2015-08-11'
        };
    }

    render() {
        return (
            <div>
                <Title level={3}>表单</Title>
                <Form
                    // validate是校验函数，当用户输入时会被调用。
                    validate={this.validate}
                    // 当所有输入都正确时回调
                    onValid={this.onValid}
                    // 当任意输入出错时回调
                    onInvalid={this.onInvalid}
                    // 当任意字段发生变化时回调，然而并不能改变任何表单内的字段
                    onChange={this.onChange}
                    // 当用户提交并通过了所有校验时回调
                    onSubmit={this.save}>
                    <div className="melon-row">
                        <div className="melon-column melon-column-6">
                            <TextBox
                                variants={['fluid']}
                                name="name"
                                floatingLabel="姓名"
                                rules={{
                                    required: true
                                }}
                                value={this.state.name} />
                        </div>
                    </div>
                    <div className="melon-row">
                        <div className="melon-column melon-column-6">
                            <TextBox
                                variants={['fluid']}
                                name="email"
                                placeholder="邮箱"
                                rules={{
                                    pattern: '',
                                    required: true
                                }}
                                defaultValue={this.state.email} />
                        </div>
                    </div>
                    <div className="melon-row">
                        <Select
                            className="melon-column melon-column-6"
                            name="sex"
                            placeholder="性别"
                            defaultValue={this.state.sex}
                            rules={{required: true}}>
                            <option value="man">男</option>
                            <option value="woman">女</option>
                        </Select>
                    </div>
                    <div className="melon-row">
                        <Uploader
                            className="melon-column melon-column-6"
                            name="avater"
                            upload={this.upload}
                            rules={{required: true}} />
                    </div>
                    <div className="melon-row">
                        <div className="melon-column melon-column-6">
                            <Title level={5}>Radio / 单选框 / 竖向（默认）</Title>
                            <BoxGroup
                                boxModel="radio"
                                name="boxgroup2"
                                value={this.state.fruit}
                                rules={{required: true}}>
                                <option value="Apple" label="Apple" />
                                <option value="Banana" label="Banana" />
                                <option value="Mango" label="Mango" />
                                <option value="Pear" label="Pear" disabled />
                            </BoxGroup>
                        </div>
                        <div className="melon-column melon-column-6">
                            <Title level={5}>Radio / 单选框 / 横向</Title>
                            <BoxGroup
                                boxModel="radio"
                                name="boxgroup2"
                                variants={['horizontal']}
                                rules={{required: true}}>
                                <option value="Apple" label="Apple" />
                                <option value="Banana" label="Banana" />
                                <option value="Mango" label="Mango" />
                                <option value="Pear" label="Pear" disabled />
                            </BoxGroup>
                        </div>
                    </div>
                    <div className="melon-row">
                        <div className="melon-column melon-column-6">
                            <Title level={5}>CheckBox / 复选框</Title>
                            <BoxGroup
                                boxModel="checkbox"
                                name="fruit"
                                value={this.state.fruits}
                                onInvalid={e => console.log(e)}
                                onValid={e => console.log(e)}
                                rules={{
                                    required: true
                                }}>
                                <option value="Apple" label="Apple" />
                                <option value="Banana" label="Banana" />
                                <option value="Mango" label="Mango" disabled />
                                <option value="Pear" label="Pear" disabled />
                            </BoxGroup>
                        </div>
                        <div className="melon-column melon-column-6">
                            <Title level={5}>CheckBox / 复选框</Title>
                            <BoxGroup
                                boxModel="checkbox"
                                name="fruit"
                                variants={['horizontal']}
                                value={this.state.fruits}
                                onInvalid={e => {console.log(e)}}
                                onValid={e => {console.log(e)}}
                                rules={{
                                    required: true
                                }}>
                                <option value="Apple" label="Apple" />
                                <option value="Banana" label="Banana" />
                                <option value="Mango" label="Mango" disabled />
                                <option value="Pear" label="Pear" disabled />
                            </BoxGroup>
                        </div>
                    </div>
                    <div className="melon-row">
                        <div className="melon-column melon-column-6">
                            <Title level={5}>Calendar / 普通日历</Title>
                            <Calendar
                                name="date"
                                value={this.state.date}
                                rules={{
                                    required: true
                                }}
                                begin="2015-08-01"
                                end="2016-09-30" />
                        </div>
                    </div>
                    <div className="melon-row">
                        <div className="melon-column melon-column-6">

                        </div>
                    </div>
                    <div className="melon-row">
                        <Toggle
                            className="melon-column"
                            name="music"
                            rules={{
                                required: true,
                                requiredErrorMessage: '请同意协议'
                            }} />
                        <div className="melon-column" style={{lineHeight: '20px'}}>同意相关协议</div>
                    </div>
                    <div className="melon-row">
                        <Button
                            className="melon-column"
                            variants={['primary', 'raised']}>保&emsp;存</Button>
                    </div>
                </Form>
            </div>
        );
    }

    onMusicChange(e) {
        this.setState({isMusicOn: !!e.value});
    }

    onFieldChange(name, value) {
        this.setState({[name]: value});
    }

    upload(files) {

        return new Promise(function (resolve, reject) {

            setTimeout(
                function () {
                    resolve('https://www.baidu.com/img/bd_logo1.png');
                },
                1000
            );

        });
    }

    validate(name, value, form) {
        return {
            isValid: false,
            message: 'haha'
        };
    }

    save(e) {
        const data = data;
        e.preventDefault();
        console.log(data);
    }

}

module.exports = View;
