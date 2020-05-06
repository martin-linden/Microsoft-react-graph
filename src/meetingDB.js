let events;

/* let events = [
	{
		'@odata.etag': 'W/"edqetsjPHkG1oWuA4gjG6QAAFe8ZXg=="',
		id:
			'AAMkADljMTE2MWQ5LThjZWQtNDMzNy05MmIwLTdiN2NmOWRiMjk2OABGAAAAAADBDpGaJZZqQKn6cew97Z8dBwB52p62yM8eQbWha4DiCMbpAAAAAAENAAB52p62yM8eQbWha4DiCMbpAAAV89ahAAA=',
		subject: 'Möte idag',
		bodyPreview: '',
		body: {
			contentType: 'html',
			content: ''
		},
		start: {
			dateTime: '2020-07-01T08:00:00.0000000',
			timeZone: 'UTC'
		},
		end: {
			dateTime: '2020-07-01T08:30:00.0000000',
			timeZone: 'UTC'
		},
		location: {
			displayName: 'Kungliga Operan',
			locationUri:
				'https://www.bingapis.com/api/v6/localbusinesses/YN7995x501194927?setLang=sv',
			locationType: 'localBusiness',
			uniqueId:
				'https://www.bingapis.com/api/v6/localbusinesses/YN7995x501194927?setLang=sv',
			uniqueIdType: 'bing',
			address: {
				street: 'Jakobs Torg 2-8',
				city: 'Stockholm',
				state: 'Stockholms län',
				countryOrRegion: 'Sverige',
				postalCode: ''
			},
			coordinates: {
				latitude: 59.3295,
				longitude: 18.0693
			}
		},
		attendees: [
			{
				type: 'required',
				status: {
					response: 'none',
					time: '0001-01-01T00:00:00Z'
				},
				emailAddress: {
					name: 'martinlinden.sthlm@gmail.com',
					address: 'martinlinden.sthlm@gmail.com'
				}
			}
		],
		organizer: {
			emailAddress: {
				name: 'Martin Lindén',
				address: 'martin-linden@frontenddev.onmicrosoft.com'
			}
		}
	},
	{
		'@odata.etag': 'W/"edqetsjPHkG1oWuA4gjG6QAAFe8ZXw=="',
		id:
			'AAMkADljMTE2MWQ5LThjZWQtNDMzNy05MmIwLTdiN2NmOWRiMjk2OABGAAAAAADBDpGaJZZqQKn6cew97Z8dBwB52p62yM8eQbWha4DiCMbpAAAAAAENAAB52p62yM8eQbWha4DiCMbpAAAV89aeAAA=',
		subject: 'teeeeest',
		bodyPreview:
			'det här är en beskrivning\r\n________________________________________________________________________________\r\nAnslut till Microsoft Teams-möte\r\nLäs mer om Teams | Mötesalternativ\r\n____________________________________________________________________________',
		body: {
			contentType: 'html',
			content:
				'<html>\r\n<head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\r\n<meta content="text/html; charset=iso-8859-1">\r\n</head>\r\n<body>\r\n<div></div>\r\n<div style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">\r\ndet här är en beskrivning</div>\r\n<div style="width:100%; height:20px"><span style="white-space:nowrap; color:gray; opacity:.36">________________________________________________________________________________</span>\r\n</div>\r\n<div class="me-email-text" style="color:#252424; font-family:\'Segoe UI\',\'Helvetica Neue\',Helvetica,Arial,sans-serif">\r\n<div style="margin-top:24px; margin-bottom:10px"><a class="me-email-headline" href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTFiODQzZmYtMWYxNi00Zjg3LTg2ODAtNjA4MjMwOTQ0YTU1%40thread.v2/0?context=%7b%22Tid%22%3a%2242e3228a-03bf-44c2-b1f2-e271545914fd%22%2c%22Oid%22%3a%22b3807807-997d-439d-9fc5-d4767db9ef2f%22%7d" target="_blank" rel="noreferrer noopener" style="font-size:18px; font-family:\'Segoe UI Semibold\',\'Segoe UI\',\'Helvetica Neue\',Helvetica,Arial,sans-serif; text-decoration:underline; color:#6264a7">Anslut\r\n till Microsoft Teams-möte</a> </div>\r\n<a class="me-email-link" target="_blank" href="https://aka.ms/JoinTeamsMeeting" rel="noreferrer noopener" style="font-size:12px; text-decoration:none; color:#6264a7">Läs mer om Teams</a> |\r\n<a class="me-email-link" target="_blank" href="https://teams.microsoft.com/meetingOptions/?organizerId=b3807807-997d-439d-9fc5-d4767db9ef2f&amp;tenantId=42e3228a-03bf-44c2-b1f2-e271545914fd&amp;threadId=19_meeting_YTFiODQzZmYtMWYxNi00Zjg3LTg2ODAtNjA4MjMwOTQ0YTU1@thread.v2&amp;messageId=0&amp;language=sv-SE" rel="noreferrer noopener" style="font-size:12px; text-decoration:none; color:#6264a7">\r\nMötesalternativ</a>\r\n<div style="font-size:14px; margin-bottom:4px"></div>\r\n<div style="font-size:12px"></div>\r\n</div>\r\n<div style="width:100%; height:20px"><span style="white-space:nowrap; color:gray; opacity:.36">________________________________________________________________________________</span>\r\n</div>\r\n</body>\r\n</html>\r\n'
		},
		start: {
			dateTime: '2020-05-04T00:00:00.0000000',
			timeZone: 'UTC'
		},
		end: {
			dateTime: '2020-05-05T00:00:00.0000000',
			timeZone: 'UTC'
		},
		location: {
			displayName: 'Stockholms Centralstation',
			locationUri:
				'https://www.bingapis.com/api/v6/localbusinesses/YN7995x15033743854414470404?setLang=sv',
			locationType: 'localBusiness',
			uniqueId:
				'https://www.bingapis.com/api/v6/localbusinesses/YN7995x15033743854414470404?setLang=sv',
			uniqueIdType: 'bing',
			address: {
				street: 'Centralplan 1',
				city: 'Stockholm',
				state: 'Stockholms län',
				countryOrRegion: 'Sverige',
				postalCode: ''
			},
			coordinates: {
				latitude: 59.3296,
				longitude: 18.0597
			}
		},
		attendees: [],
		organizer: {
			emailAddress: {
				name: 'Martin Lindén',
				address: 'martin-linden@frontenddev.onmicrosoft.com'
			}
		}
	}
];
 */
const templateFields = { meetingType: 'E', agenda: [{ time: '', topic: '', person: '', }] }; // add new fields here, please

export const getMeetings = () => events;
export const getMeetingByID = (id) =>
	events.find((event) => event.id == id);
export const updateMeetingByID = (id, meeting) => {
	let event = events.find((event) => event.id == id);
	let newEvent = Object.assign(event, meeting);
};

export const setMeetings = (inEvents) => {
	events = inEvents.map((event) => Object.assign(event, templateFields));
};

export const meetingTypes = {
	O: 'Offentligt',
	E: 'Enstaka',
	X: 'Externt',
	R: 'Återkommande'
};
