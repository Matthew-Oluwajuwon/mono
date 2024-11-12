export class UserData {
  access_token: string = "";
  token_type: string = "";
  expires_in: number = 0;
  expires_at: number = 0;
  refresh_token: string = "";
  user: User = new User();
}

export class User {
  id: string = "";
  aud: string = "";
  role: string = "";
  email: string = "";
  email_confirmed_at: string = "";
  phone: string = "";
  confirmed_at: string = "";
  last_sign_in_at: string = "";
  app_metadata: AppMetadata = new AppMetadata();
  user_metadata: UserMetadata = new UserMetadata();
  identities: Identity[] = [];
  created_at: string = "";
  updated_at: string = "";
  is_anonymous: boolean = false;
}

export class AppMetadata {
  provider: string = "";
  providers: string = "";
}

export class UserMetadata {}

export class Identity {
  identity_id: string = "";
  id: string = "";
  user_id: string = "";
  identity_data: IdentityData = new IdentityData();
  provider: string = "";
  last_sign_in_at: string = "";
  created_at: string = "";
  updated_at: string = "";
  email: string = "";
}

export class IdentityData {
  email: string = "";
  email_verified: boolean = false;
  phone_verified: boolean = false;
  sub: string = "";
}
