import React, { useRef, useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";

export const SplitOTPBoxesContainer  = (props:any) => {
    return(
        <Pressable style={styles.splitContainer}>{props.children}</Pressable>
    )
}

export const SplitOTPBoxes  = (props:any) => {
    return(
        <View style={styles.splitBoxes}>{props.children}</View>
    )
}

export const SplitOTPText  = (props:any) => {
    return(
        <Text style={styles.splitBoxText}>{props.children}</Text>
    )
}

export const SplitBoxesFocused  = (props:any) => {
    return(
        <SplitOTPBoxes style={styles.splitBoxesFocused}>{props.children}</SplitOTPBoxes>
    )
}

const OtpInput = ({ code, setCode, maximumLength, setIsPinReady }: any) => {
    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef<TextInput>();

    useEffect(() => {
        // update pin ready status
        setIsPinReady(code.length === maximumLength);
        // clean up function
        return () => {
          setIsPinReady(false);
        };
    }, [code]);

    const handleOnPress = () => {
        setIsInputBoxFocused(true);
        if(inputRef.current){
            inputRef?.current?.focus();
        }
    };
     
    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

    const boxDigit = (_:any, index:any) => {
        const emptyInput = "";
        const digit = code[index] || emptyInput;

        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

        const StyledSplitBoxes = isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitOTPBoxes;

        return (
          <StyledSplitBoxes key={index}>
            <SplitOTPText>{digit}</SplitOTPText>
          </StyledSplitBoxes>
        );
    };

    const onChanged = (text:any) => {
        console.log("text", text);
        if(text == ''){
            setCode('');
            return;
        }

        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
                setCode(newText);
            }
        }
    }

    return (
        <View style={styles.OTPInputContainer}>
            <SplitOTPBoxesContainer>{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
            <TextInput style={styles.TextInputHidden}  
                value={code}
                keyboardType='numeric'
                onChangeText={onChanged}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={handleOnBlur}>
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    splitBoxesFocused:{
        borderColor: '#ecdbba',
        backgroundColor: 'grey'
    },
    splitContainer:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    splitBoxes: {
        borderColor: '#e5e5e5',
        borderWidth: 2,
        borderRadius: 5,
        padding: 12,
        minWidth: 50,
    },
    splitBoxText:{
        fontSize: 20,
        textAlign: 'center',
        color: '#e5e5e5'
    },
    OTPInputContainer:{
       justifyContent: 'center',
       alignItems: 'center'
    },
    TextInputHidden :{
        width: 300,
        borderColor: '#e5e5e5',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        position: 'absolute',
        opacity: 0,
    }
});

export default OtpInput;
