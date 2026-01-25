export function getAvatar(userPicture, userEmail){
  return userPicture ?? `https://avatar.vercel.sh/${userEmail}`;
}