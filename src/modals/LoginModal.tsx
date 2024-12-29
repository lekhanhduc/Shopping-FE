import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

interface LoginModalProps {
    handleClose: () => void;
}

const LoginModal = ({ handleClose }: LoginModalProps) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
            position="fixed"
            top="0"
            left="0"
            zIndex={9999}
            bgcolor="rgba(0, 0, 0, 0.5)"
            onClick={handleClose}
        >
            <Box
                className="modal-login"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="40%"
                maxWidth="400px"
                sx={{
                    backgroundColor: 'rgb(250, 250, 250)',
                    borderRadius: '8px',
                    padding: 3,
                }}
                onClick={(e) => e.stopPropagation()}  // Ngăn việc đóng modal khi click vào nội dung trong modal
            >
                <h1 style={{ fontWeight: '700' }}>Xin chào</h1>
                <h3 style={{ fontWeight: '500' }}>Đăng nhập hoặc tạo tài khoản</h3>
                <div>
                    <input
                        type="text"
                        placeholder="Email hoặc số điện thoại"
                        style={{
                            width: '100%',
                            border: 'none',
                            borderBottom: '2px solid #ccc',
                            padding: '15px 5px',
                            fontSize: '16px',
                            outline: 'none',
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        style={{
                            width: '100%',
                            border: 'none',
                            borderBottom: '2px solid #ccc',
                            padding: '15px 5px',
                            fontSize: '16px',
                            outline: 'none',
                        }}
                    />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Nhớ mật khẩu" />
                </div>

                <Button variant="contained" disableElevation sx={{ marginTop: '15px', width: '100%' }}>
                    Tiếp tục
                </Button>
                <p>Hoặc tiếp tục bằng</p>
                <div>
                    <Button variant="text"><FacebookIcon color="primary" /></Button>
                    <Button variant="text"><GoogleIcon sx={{ color: '#4285F4' }} /></Button>
                </div>
            </Box>
        </Box>
    );
}

export default LoginModal;
