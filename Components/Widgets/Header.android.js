/* @flow */
'use strict';

import React from 'react';
import {View, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class Header extends NativeBaseComponent {

    getInitialStyle() {
        return {
            navbar: {
                backgroundColor: this.getTheme().toolbarDefaultBg,
                justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                paddingTop: (Platform.OS === 'ios' ) ? 27 : 12,
                height: this.getTheme().toolbarHeight,
                elevation: 3,
                borderBottomWidth: (Platform.OS === 'ios' ) ? 1 : 0,
                borderBottomColor: this.getTheme().headerBorder,
            },
            title : {
                color: '#fff',
                fontSize: 20,
                fontWeight: "500",
                alignSelf: 'center'
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().navbar
        };

        return computeProps(this.props, defaultProps);

    }

    render() {

        return(
            <View {...this.prepareRootProps()}>
                { !Array.isArray(this.props.children) &&
                <View >
                    {this.props.children}
                </View>}

                { Array.isArray(this.props.children) &&
                <View style={{flex: 1, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-start', paddingTop: 5, marginLeft: -15}}>
                    {this.props.children[0]}
                </View>}

                { Array.isArray(this.props.children) &&
                <View style={{flex: 3, alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    {this.props.children[1]}
                </View>}

                { Array.isArray(this.props.children) &&
                <View style={{flex:1,alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', paddingLeft: 5, marginRight: -12}}>
                    {this.props.children[2]}
                </View>}
            </View>
        );
    }
}
