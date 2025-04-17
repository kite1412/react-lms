import { useMutation, useQuery } from "@tanstack/react-query";
import ContentLayout from "../layouts/ContentLayout";
import userService from "../services/userService";
import pp from "../assets/ice_bear.png";
import { useEffect, useState } from "react";
import Eye from "../assets/eye-fill.svg?react";
import EyeSlash from "../assets/eye-slash-fill.svg?react";
import { useAuth } from "../contexts/AuthContext";

function ProfilePage() {
  const { data, isPending } = useQuery({
    queryKey: ["my-info"],
    queryFn: async () => await userService.getMyInfo(),
    onSuccess: data => {
      setName(data.data.name);
    }
  });
  const [name, setName] = useState("");
  const updateUsername = useMutation({
    mutationFn: () => userService.updateMyName(name)
  });
  const { logout } = useAuth();

  useEffect(() => {
    if (data) {
      setName(data.data.name);
    }
  }, [data])

  return !isPending ? <ContentLayout
    menu={"PROFILE"}
    content={
      <div className="flex flex-col gap-20 relative py-5 pb-20">
        <ConsumePadding>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <img 
                src={pp}
                className="rounded-full size-40"
              />
              <div>
                <p className="text-2xl font-bold">{data.name}</p>
                <p>{data.email}</p>
              </div>
            </div>
            <button 
              className={`
                text-red-500 px-6 py-3 bg-white rounded-[8px] font-bold 
                cursor-pointer hover:bg-white/90  
              `}
              onClick={() => logout()}
            >
              Log Out
            </button>
          </div>
        </ConsumePadding>
        <div className="flex flex-col gap-4">
          <hr />
          <ConsumePadding>
            <AccountSettings
              name={name}
              setName={setName}
              onUpdateUsernameClick={() => updateUsername.mutate()}
            />
          </ConsumePadding>
        </div>
      </div>
    }
  /> : <></>;
}

export default ProfilePage;

function ConsumePadding({
  children
}) {
  return <div className="px-20">
    {children}
  </div>;
}

function AccountSettings({
  name,
  setName,
  onUpdateUsernameClick
}) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const updatePassword = useMutation({
    mutationFn: () => userService.updateMyPassword({
      current_password: currentPassword,
      new_password: newPassword,
      confirm_password: confirmPassword
    })
  });
  const section = (name) => <p className="font-bold text-2xl">
    {name}
  </p>;

  return (
    <div className="flex flex-col gap-10">
      {section("Account Settings")}
      <div className="flex gap-10 items-start">
        <div className="flex flex-col gap-10 flex-3/4">
          <div className="flex flex-col gap-4 items-start">
            <Field 
              value={name}
              setValue={setName}
              placeholder={"Full Name"}
              label={"Full Name"}
            />
            <Button 
              action={"Save Changes"}
              onClick={onUpdateUsernameClick}
            />
          </div>
          {section("Change Password")}
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 flex-1/2">
              <Field 
                value={currentPassword}
                setValue={setCurrentPassword}
                placeholder={"Current Password"}
                label={"Current Password"}
                isSensitive={true}
              />
              <Field 
                value={newPassword}
                setValue={setNewPassword}
                placeholder={"New Password"}
                label={"New Password"}
                isSensitive={true}
              />
            </div>
            <div className="flex-1/2 flex flex-col gap-4 items-start">
              <Field 
                value={confirmPassword}
                setValue={setConfirmPassword}
                placeholder={"Confirm Password"}
                label={"Confirm Password"}
                isSensitive={true}
              />
              <Button 
                action={"Save Changes"}
                onClick={() => updatePassword.mutate()}
              />
            </div>
          </div>
        </div>
        <div className="flex-1/4 flex flex-col gap-2 border-1 border-gray-400 py-4 px-6">
          <img 
            src={pp}
            className="w-full"
          />
          <div className="flex items-center justify-center text-white bg-blue-500 py-2">
            Upload
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  value,
  setValue,
  placeholder,
  label,
  isSensitive = false
}) {
  const [show, setShow] = useState(!isSensitive);
  const iconButton = "size-[24px] select-none cursor-pointer";
  const showClick = () => setShow(!show);

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="font-bold">
        {label}
      </span>
      <div className="flex justify-between gap-4 px-4 py-2 border-1 border-e-gray-400">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          type={show ? "text" : "password"}
          className="w-full outline-none"
        />
        {
          isSensitive ? show 
            ? <EyeSlash className={iconButton} onClick={showClick} />
            : <Eye className={iconButton} onClick={showClick} />
            : <></>
        }
      </div>
    </div>
  )
}

function Button({
  action,
  onClick
}) {
  return (
    <div 
      className={`
        select-none cursor-pointer py-3 px-6 hover:opacity-80 bg-blue-800 
        text-white flex items-center justify-center w-auto
      `}
      onClick={onClick}
    >
      {action}
    </div>
  );
}