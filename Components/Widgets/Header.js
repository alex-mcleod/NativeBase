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
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: (Platform.OS === 'ios' ) ? 20 : 12,
                height: this.getTheme().toolbarHeight,
                elevation: 3,
                flex: 1,
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
                <View style={{flex: 1, justifyContent : 'flex-start', alignItems: 'flex-start', flexDirection: 'row', borderWidth: 1}}>
                    {this.props.children[0]}
                </View>}

                { Array.isArray(this.props.children) &&
                <View style={{flex: 3, alignSelf: 'center', borderWidth: 1}}>
                    {this.props.children[1]}
                </View>}

                { Array.isArray(this.props.children) &&
                <View style={{flex: 1,alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', paddingLeft: 5, borderWidth: 1}}>
                    {this.props.children[2]}
                </View>}
            </View>
        );
    }
}
