import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { v4 as uuidv4 } from 'uuid';

function Room() {
    const { roomId } = useParams();
    const meetingUI = useRef(null);

    useEffect(() => {
        async function setupMeetingUI() {
            const appId = 826116956;
            const serverSecret = "ff67fa2eff2309d7a889f9d6bd0dd726";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appId,
                serverSecret,
                roomId,
                uuidv4(),
                ""
            );

            const ui = ZegoUIKitPrebuilt.create(kitToken);

            ui.joinRoom({
                container: meetingUI.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference
                }
            });
        }

        setupMeetingUI();
    }, [roomId]);

    return (
        <>
            <div ref={meetingUI} className=''></div>
        </>
    );
}

export default Room;
