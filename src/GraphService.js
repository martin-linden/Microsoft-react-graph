var graph = require('@microsoft/microsoft-graph-client');

function getAuthenticatedClient(accessToken) {
	// Initialize Graph client
	const client = graph.Client.init({
		// Use the provided access token to authenticate
		// requests
		authProvider: (done) => {
			done(null, accessToken.accessToken);
		}
	});

	return client;
}

export async function getUserDetails(accessToken) {
	const client = getAuthenticatedClient(accessToken);

	const user = await client.api('/me').get();
	return user;
}

export async function getEvents(accessToken) {
	const client = getAuthenticatedClient(accessToken);

	const events = await client
		.api('/me/events')
		.select(
			'subject,organizer,start,end,location,attendees,bodypreview,body'
		)
		.orderby('createdDateTime DESC')
		.get();

	return events;
}
export async function getUsers(accessToken) {
	const client = getAuthenticatedClient(accessToken);

	const users = await client
		.api('/users')
		//		.select('subject,organizer,start,end')
		//		.orderby('createdDateTime DESC')
		.get();

	return users;
}
export async function getGroups(accessToken) {
	const client = getAuthenticatedClient(accessToken);

	const groups = await client
		.api('/groups')
		//		.select('subject,organizer,start,end')
		//		.orderby('createdDateTime DESC')
		.get();

	return groups;
}
export async function getGroupMembers(accessToken, id) {
	const client = getAuthenticatedClient(accessToken);

	const groupMembers = await client
		.api(`/groups/${id}/members`)
		//		.select('subject,organizer,start,end')
		//		.orderby('createdDateTime DESC')
		.get();

	return groupMembers;
}

// createGroup({displayName}), addGroupMember
export async function getMemberGroups(accessToken, id) {
	const client = getAuthenticatedClient(accessToken);

	const memberGroups = await client
		.api('/groups/{id}/getMemberGroups')
		//		.select('subject,organizer,start,end')
		//		.orderby('createdDateTime DESC')
		.get();

	return memberGroups;
}

export async function createGroup(accessToken, group) {
	const client = getAuthenticatedClient(accessToken);

	const templateObject = {
		description: 'Self help community for library',
		displayName: 'Library Assist',
		groupTypes: [ 'Unified' ],
		mailEnabled: true,
		mailNickname: 'library',
		securityEnabled: false // byt eventuellt till true om strul
	};

	group = Object.assign(templateObject, group);
	let res = await client.api('/groups').post(group);
}
