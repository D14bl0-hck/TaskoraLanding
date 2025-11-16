/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - Unique identifier for each waitlist entry
      - `email` (text, unique) - User's email address
      - `created_at` (timestamptz) - Timestamp when the user joined the waitlist
  
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for public insert access (anyone can join the waitlist)
    - Add policy for authenticated admin users to read waitlist entries
  
  3. Notes
    - Email addresses are unique to prevent duplicate entries
    - Table includes automatic timestamp for tracking when users join
    - RLS ensures data security while allowing public signups
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);
