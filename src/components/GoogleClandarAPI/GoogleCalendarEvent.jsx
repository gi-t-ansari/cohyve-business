import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { useSelector } from "react-redux"; // Assuming you're using Redux to get date and time

const clientId =
  "135526554091-qrhd49iftfs63qn0p614qbij818q86bo.apps.googleusercontent.com";

function GoogleCalendarIntegration() {
  const date = "Thu Nov 28 2024";
  const time = "16:00";

  useEffect(() => {
    function initClient() {
      gapi.client
        .init({
          clientId: clientId,
          scope: "https://www.googleapis.com/auth/calendar.events",
        })
        .then(() => {
          return gapi.client.load("calendar", "v3");
        })
        .then(() => {
          console.log("Google Calendar API loaded.");
        })
        .catch((error) => {
          console.error("Error loading GAPI client for API", error);
        });
    }
    gapi.load("client:auth2", initClient);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const createMeeting = async () => {
    if (!gapi.client.calendar) {
      console.error("Google Calendar API is not loaded.");
      return;
    }

    // Combine date and time from Redux
    const startTime = new Date(`${date} ${time}`);
    console.log("DateTime: ", startTime);
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + 30); // 30 minutes meeting duration

    const event = {
      summary: "Scheduled Meeting",
      description: "This meeting is created via Google Calendar API.",
      start: {
        dateTime: startTime.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      attendees: [{ email: "rishirajanand5@gmail.com" }],
      conferenceData: {
        createRequest: {
          requestId: `meet_${Math.random().toString(36).substring(2)}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
        conferenceDataVersion: 1,
        sendUpdates: "all",
      });
      console.log("Meeting link:", response.result.hangoutLink);
      alert(`Meeting link created: ${response.result.hangoutLink}`);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div>
      <button onClick={handleAuthClick}>Authorize Google Calendar</button>
      <button onClick={handleSignoutClick}>Sign Out</button>
      <button onClick={createMeeting}>Create Meeting</button>
    </div>
  );
}

export default GoogleCalendarIntegration;
